const express = require('express')
const contacts = require("../../models/contacts.json")

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(contacts);
})

router.get('/:contactId', async (req, res, next) => {
  const id = req.params.contactId;
  const contact = contacts.find(contact => contact.id === id)

  if(!contact){
    res.status(404).json({massage: "contact not found"});
  }else{
    req.status(200).json({massage: "contact found"})
  }

  console.log(id);
  res.json(contact);
})

router.post('/', async (req, res, next) => {

  const addContact = {
    id: Date.now().toString(),
    name: name,
    email: email,
    phone: phone,
  }
  
})

router.delete('/:contactId', async (req, res, next) => {
  const id = req.params.contactId;
  const contact = contacts.filter(contact => contact.id === id)

  if(!contact){
    res.status(404).json({massage: "massage not found"});
  }else{
    res.status(200).json({massage:"contact deleted"});
  }

  console.log(id);
  res.json(contact);

})

router.put('/:contactId', async (req, res, next) => {
  const id = req.params.contactId;
  const contact = contacts.push(contact => contact.id === id)

  if(!contact){
    res.status(404).json({massage: "massage not found"});
  }else{
    res.status(200).json;
  }

  console.log(id);
  res.json(contact);

})

module.exports = router
