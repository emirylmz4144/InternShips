﻿using APIofPhoneBook.DTOs;
using APIofPhoneBook.Models;

namespace APIofPhoneBook.Services
{
    public interface IContactService
    {
        Task<ContactDTO> CreateContact(ContactDTO newContact);
        Task<bool> DeleteContact(int id);
        Task<List<ContactDTO>> GetAllContacts();
        Task<ContactDTO> GetContactById(int id);
        Task<ContactDTO> UpdateContact(ContactDTO updateContact);
    }
}
