export interface Receita {
    id: number;
    nome: string;
    modoPreparo: string;
    tempoPreparo: number;
    categoriaId: number;
    categoria?: { id: number; nome: string; };
    ingredienteId: number;
    ingrediente?: { id: number; nome: string; };
}