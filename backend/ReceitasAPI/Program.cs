using Microsoft.EntityFrameworkCore;
using ReceitasAPI.Data;
using ReceitasAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=receitas.db"));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

// ─── CATEGORIAS ───
app.MapGet("/categorias", async (AppDbContext db) =>
    await db.Categorias.ToListAsync());

app.MapGet("/categorias/{id}", async (int id, AppDbContext db) =>
    await db.Categorias.FirstOrDefaultAsync(x => x.Id == id) is Categoria c
        ? Results.Ok(c) : Results.NotFound());

app.MapPost("/categorias", async (Categoria categoria, AppDbContext db) =>
{
    db.Categorias.Add(categoria);
    await db.SaveChangesAsync();
    return Results.Created($"/categorias/{categoria.Id}", categoria);
});

app.MapPut("/categorias/{id}", async (int id, Categoria input, AppDbContext db) =>
{
    var categoria = await db.Categorias.FirstOrDefaultAsync(x => x.Id == id);
    if (categoria is null) return Results.NotFound();
    categoria.Nome = input.Nome;
    categoria.Descricao = input.Descricao;
    await db.SaveChangesAsync();
    return Results.Ok(categoria);
});

app.MapDelete("/categorias/{id}", async (int id, AppDbContext db) =>
{
    var categoria = await db.Categorias.FirstOrDefaultAsync(x => x.Id == id);
    if (categoria is null) return Results.NotFound();
    db.Categorias.Remove(categoria);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapGet("/ingredientes", async (AppDbContext db) =>
    await db.Ingredientes.ToListAsync());

app.MapGet("/ingredientes/{id}", async (int id, AppDbContext db) =>
    await db.Ingredientes.FirstOrDefaultAsync(x => x.Id == id) is Ingrediente i
        ? Results.Ok(i) : Results.NotFound());

app.MapPost("/ingredientes", async (Ingrediente ingrediente, AppDbContext db) =>
{
    db.Ingredientes.Add(ingrediente);
    await db.SaveChangesAsync();
    return Results.Created($"/ingredientes/{ingrediente.Id}", ingrediente);
});

app.MapPut("/ingredientes/{id}", async (int id, Ingrediente input, AppDbContext db) =>
{
    var ingrediente = await db.Ingredientes.FirstOrDefaultAsync(x => x.Id == id);
    if (ingrediente is null) return Results.NotFound();
    ingrediente.Nome = input.Nome;
    ingrediente.Unidade = input.Unidade;
    await db.SaveChangesAsync();
    return Results.Ok(ingrediente);
});

app.MapDelete("/ingredientes/{id}", async (int id, AppDbContext db) =>
{
    var ingrediente = await db.Ingredientes.FirstOrDefaultAsync(x => x.Id == id);
    if (ingrediente is null) return Results.NotFound();
    db.Ingredientes.Remove(ingrediente);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();