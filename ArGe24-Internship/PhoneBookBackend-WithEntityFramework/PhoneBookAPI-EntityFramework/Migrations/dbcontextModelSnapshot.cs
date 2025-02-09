﻿// <auto-generated />
using APIofPhoneBook.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AddressBookAPI.Migrations
{
    [DbContext(typeof(dbcontext))]
    partial class dbcontextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("APIofPhoneBook.Models.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Contacts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "İstanbul,Sancaktepe,Eyüpsultan mahallesi",
                            FirstName = "Muhammed Emir",
                            LastName = "Yılmaz",
                            Phone = "111-111-1111"
                        },
                        new
                        {
                            Id = 2,
                            Address = "İstanbul,Sancaktepe,Eyüpsultan mahallesi",
                            FirstName = "Muhammed Bilal",
                            LastName = "Yılmaz",
                            Phone = "222-222-2222"
                        },
                        new
                        {
                            Id = 3,
                            Address = "İstanbul,Sancaktepe,Eyüpsultan mahallesi",
                            FirstName = "Hilal",
                            LastName = "Yılmaz",
                            Phone = "333-333-3333"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
