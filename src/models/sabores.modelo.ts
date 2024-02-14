export interface Sabor {
    sabor: string,
    ingredientes: string
}

export interface PaginaSabor {
    data: Sabor[],
    currentPage: number,
    totalItems: number,
    totalPages: number
}
  