export interface Invoice {
    id: string,
    clientAddress: Address,
    clientEmail: string,
    clientName: string,
    createdAt: string,
    description: string,
    items: Items[],
    paymentDue: string,
    paymentTerms: number,
    senderAddress: Address,
    status: string,
    total: number,
}

export interface Address {
    city: string,
    country: string,
    postCode: string,
    street: string,
}

export interface Items {
    name: string,
    price: number,
    quantity: number,
    total: number,
}

export interface InvoiceSummary {
    id: string,
    paymentDue: string,
    clientName: string,
    total: number,
    status: string,
}