using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetPlus.Api.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tbl_Clinica",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Cnpj = table.Column<string>(type: "TEXT", maxLength: 18, nullable: false),
                    CorporateName = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    PersonType = table.Column<string>(type: "TEXT", nullable: false),
                    PlanType = table.Column<string>(type: "TEXT", nullable: false),
                    AcceptedTerms = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_Clinica", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tbl_Funcionarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ds_Name = table.Column<string>(type: "TEXT", maxLength: 80, nullable: false),
                    ds_CPF = table.Column<string>(type: "TEXT", maxLength: 14, nullable: false),
                    ds_RG = table.Column<string>(type: "TEXT", maxLength: 12, nullable: false),
                    ds_Genero = table.Column<string>(type: "TEXT", nullable: false),
                    dt_DataNascimento = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ds_Email_Pessoal = table.Column<string>(type: "TEXT", nullable: false),
                    nr_Telefone = table.Column<string>(type: "TEXT", nullable: true),
                    ds_CEP = table.Column<string>(type: "TEXT", nullable: false),
                    ds_Rua = table.Column<string>(type: "TEXT", nullable: true),
                    ds_Bairro = table.Column<string>(type: "TEXT", nullable: true),
                    nr_Numero = table.Column<string>(type: "TEXT", nullable: true),
                    ds_Cidade = table.Column<string>(type: "TEXT", nullable: true),
                    ds_Cargo = table.Column<string>(type: "TEXT", nullable: false),
                    nr_CRM = table.Column<string>(type: "TEXT", nullable: true),
                    ds_Status = table.Column<string>(type: "TEXT", nullable: false),
                    dt_DataContratacao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ds_Usuario = table.Column<string>(type: "TEXT", nullable: false),
                    ds_Email = table.Column<string>(type: "TEXT", nullable: false),
                    ds_Password = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    ds_Acesso = table.Column<string>(type: "TEXT", nullable: false),
                    ClinicId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_Funcionarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tbl_Funcionarios_tbl_Clinica_ClinicId",
                        column: x => x.ClinicId,
                        principalTable: "tbl_Clinica",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tbl_Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    FullName = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Cpf = table.Column<string>(type: "TEXT", maxLength: 14, nullable: false),
                    Rg = table.Column<string>(type: "TEXT", maxLength: 12, nullable: true),
                    PersonType = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    ClinicId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_Usuarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tbl_Usuarios_tbl_Clinica_ClinicId",
                        column: x => x.ClinicId,
                        principalTable: "tbl_Clinica",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tbl_Funcionarios_ClinicId",
                table: "tbl_Funcionarios",
                column: "ClinicId");

            migrationBuilder.CreateIndex(
                name: "IX_tbl_Usuarios_ClinicId",
                table: "tbl_Usuarios",
                column: "ClinicId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbl_Funcionarios");

            migrationBuilder.DropTable(
                name: "tbl_Usuarios");

            migrationBuilder.DropTable(
                name: "tbl_Clinica");
        }
    }
}
