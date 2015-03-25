companyList = new Mongo.Collection('Company');
 
if (Meteor.isClient) {
    Meteor.subscribe('theCompanies');
   

   Template.companyDetails.helpers({
    'company': function(){

      
      // Retrieve data that belongs to the current user
      return companyList.find({},{sort: {name:1}});

    }
  });
   
   Template.addCompanyForm.events({
      'submit form': function(events){
           // Prevent the browser from applying default behaviour to the form
        event.preventDefault();

        // Get the value from the "playerName" text field
        companyNameVar = event.target.companyName.value;
        companyLogoVar = event.target.logoUrl.value;
        shortDescriptionVar = event.target.shortDescription.value;
        companyTypeVar = event.target.companyType.value;
        // Call a Meteor method and pass through a name
        Meteor.call('insertCompanyData',companyNameVar,companyLogoVar,shortDescriptionVar,companyTypeVar);
      }
    });
    
    }

  

if (Meteor.isServer) {

  // Transmit a selection of data into the ether
  Meteor.publish('theComapnies', function(){
  });

  Meteor.methods({
    'insertCompanyData': function(companyNameVar,companyLogoVar,shortDescriptionVar,companyTypeVar){


        // Insert the data of a new company
        companyList.insert({
            name: companyNameVar,
            logo: companyLogoVar,
            shortDescription: shortDescriptionVar,
            type: companyTypeVar
        });

    }
  });

}
