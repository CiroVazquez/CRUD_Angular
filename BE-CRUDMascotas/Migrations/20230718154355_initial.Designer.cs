﻿// <auto-generated />
using System;
using BE_CRUDMascotas.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BE_CRUDMascotas.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20230718154355_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BE_CRUDMascotas.Models.Mascota", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("colorMascota")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("edadMascota")
                        .HasColumnType("int");

                    b.Property<DateTime>("fechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("generoMascota")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombreMascota")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("pesoMascota")
                        .HasColumnType("real");

                    b.Property<string>("razaMascota")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipoMascota")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Mascotas");
                });
#pragma warning restore 612, 618
        }
    }
}
