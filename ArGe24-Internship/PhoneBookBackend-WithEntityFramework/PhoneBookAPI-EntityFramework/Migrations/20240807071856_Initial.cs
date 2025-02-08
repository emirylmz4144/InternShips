using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AddressBookAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(200)", maxLength: 200)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Address", "FirstName", "LastName", "Phone" },
                values: new object[] { 1, "İstanbul,Sancaktepe,Eyüpsultan mahallesi", "Muhammed Emir", "Yılmaz", "111-111-1111" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Address", "FirstName", "LastName", "Phone" },
                values: new object[] { 2, "İstanbul,Sancaktepe,Eyüpsultan mahallesi", "Muhammed Bilal", "Yılmaz", "222-222-2222" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Address", "FirstName", "LastName", "Phone" },
                values: new object[] { 3, "İstanbul,Sancaktepe,Eyüpsultan mahallesi", "Hilal", "Yılmaz", "333-333-3333" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
