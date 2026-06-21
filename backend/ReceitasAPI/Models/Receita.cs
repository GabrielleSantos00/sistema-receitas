namespace ReceitasAPI.Models;

public class Receita
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string ModoPreparo { get; set; } = string.Empty;
    public int TempoPreparo { get; set; }
    public int CategoriaId { get; set; }
    public Categoria? Categoria { get; set; }
    public int IngredienteId { get; set; }
    public Ingrediente? Ingrediente { get; set; }
}