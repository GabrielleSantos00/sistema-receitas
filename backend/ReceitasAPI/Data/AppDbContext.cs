using Microsoft.EntityFrameworkCore;
using ReceitasAPI.Models;

namespace ReceitasAPI.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Categoria> Categorias => Set<Categoria>();
    public DbSet<Ingrediente> Ingredientes => Set<Ingrediente>();
    public DbSet<Receita> Receitas => Set<Receita>();
}