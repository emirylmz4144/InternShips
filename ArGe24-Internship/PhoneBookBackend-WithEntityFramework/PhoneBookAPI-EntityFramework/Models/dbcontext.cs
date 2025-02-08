using Microsoft.EntityFrameworkCore;

namespace APIofPhoneBook.Models
{
    public class dbcontext : DbContext
    {
        public dbcontext(DbContextOptions<dbcontext> options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                new Contact() { Id = 1, FirstName = "Muhammed Emir", LastName = "Yılmaz", Phone = "111-111-1111", Address = "İstanbul,Sancaktepe,Eyüpsultan mahallesi" },
                new Contact() { Id = 2, FirstName = "Muhammed Bilal", LastName = "Yılmaz", Phone = "222-222-2222", Address = "İstanbul,Sancaktepe,Eyüpsultan mahallesi" },
                new Contact() { Id = 3, FirstName = "Hilal", LastName = "Yılmaz", Phone = "333-333-3333", Address = "İstanbul,Sancaktepe,Eyüpsultan mahallesi" }
            );
        }
    }
}
