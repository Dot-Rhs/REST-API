//import the schema
Contact = require("./contactModel");

//Handle index actions
exports.index = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "It is a success!",
      message: "Contacts retreived yo",
      data: contacts
    });
  });
};

//handle create Contact actions
// exports.new = (req, res) => {
//   var contact = new Contact();
//   contact.name = req.body.name ? req.body.name : contact.name;
//   contact.gender = req.body.gender;
//   contact.email = req.body.email;
//   contact.phone = req.body.phone;

exports.new = function(req, res) {
  var contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;

  //save the Contact and check for errors
  contact.save(err => {
    if (err) res.json(err);

    res.json({
      message: "New Contact created!",
      data: contact
    });
  });
};

//handle view Contact info
exports.view = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) res.send(err);

    res.json({
      message: "Contact details loading...",
      data: contact
    });
  });
};

//handle update Contact info
exports.update = (req, res) => {
  Contact.findById(req.params.contact_id, (err, Contact) => {
    if (err) res.send(err);

    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    //save the Contact and check for errors
    contact.save(err => {
      if (err) res.json(err);
      res.json({
        message: "Contact Info Updated",
        data: contact
      });
    });
  });
};

//Handle delete Contact
exports.delete = (req, res) => {
  Contact.deleteOne(
    {
      _id: req.params.contact_id
    },
    (err, contact) => {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Contact deleted"
      });
    }
  );
};
