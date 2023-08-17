using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE_CRUDMascotas.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Mascotas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombreMascota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tipoMascota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    razaMascota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    generoMascota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    colorMascota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    edadMascota = table.Column<int>(type: "int", nullable: false),
                    pesoMascota = table.Column<float>(type: "real", nullable: false),
                    fechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mascotas", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mascotas");
        }
    }
}
