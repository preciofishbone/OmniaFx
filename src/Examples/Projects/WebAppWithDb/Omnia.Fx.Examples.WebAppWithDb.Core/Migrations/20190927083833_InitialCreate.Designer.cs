﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Omnia.Fx.Examples.WebAppWithDb.Core.Repositories;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Migrations
{
    [DbContext(typeof(BikesDbContext))]
    [Migration("20190927083833_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Omnia.Fx.Examples.WebAppWithDb.Core.Entities.OrderedBikeEntity", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Bike");

                    b.Property<Guid>("UserId");

                    b.HasKey("OrderId");

                    b.ToTable("OrderedBikes");
                });
#pragma warning restore 612, 618
        }
    }
}