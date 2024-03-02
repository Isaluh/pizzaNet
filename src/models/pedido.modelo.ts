export interface Pedido {
    pizzas: ItemPizza[], 
    bebidas: ItemBebida[]
}

export interface ItemPizza {
    tamanho : TamanhoPizza,
    sabor1  : string,
    sabor2  : string
}

export interface ItemBebida {
    categoria : CategoriaBebida,
    sabor     : string
}

export enum CategoriaBebida {
    NULL         = 0,
    SUCO         = 1,
    REFRIGERANTE = 2,
    CERVEJA      = 3
}

export enum TamanhoPizza {
    NULL    = 0,
    PEQUENA = 1,
    MEDIA   = 2,
    GRANDE  = 3 
}