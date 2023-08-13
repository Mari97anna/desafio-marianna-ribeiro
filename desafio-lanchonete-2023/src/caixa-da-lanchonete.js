class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let tipoPagamento = metodoDePagamento;
        let listaProdComprados = itens;
        let itensFormatados = [];
        let valorTotalDaCompra = 0;

        const lstProdutos = [
            { produto: "cafe", valor: 3.00, extra: false },
            { produto: "chantily", valor: 1.50, extra: true },
            { produto: "suco", valor: 6.20, extra: false },
            { produto: "sanduiche", valor: 6.50, extra: false },
            { produto: "queijo", valor: 2.00, extra: true },
            { produto: "salgado", valor: 7.50, extra: false },
            { produto: "combo1", valor: 9.50, extra: false },
            { produto: "combo2", valor: 7.50, extra: false }
        ];

        //Caso não tenha itens no carrinho
        if (itens == null || itens.length <= 0) {
            console.log("Não há itens no carrinho de compra!")
            return;
        }

        //Formatação da lista de itens no carrinho para facilitar o calculo
        itens.map(i => itensFormatados.push({
            produto: i.split(",")[0],
            quantidade: parseInt(i.split(",")[1])
        }))


        if (itensFormatados.find(i => i.produto == "cafe") == undefined && itensFormatados.find(i => i.produto == "chantily") != undefined) {
            //Caso tenha chantily e não tenha café, retornar mensagem de erro
            console.log("Item extra não pode ser pedido sem o principal")
            return;
        }
        else if (itensFormatados.find(i => i.produto == "sanduiche") == undefined && itensFormatados.find(i => i.produto == "queijo") != undefined) {
            //Caso tenha queijo e não tenha sanduiche, retornar mensagem de erro
            console.log("Item extra não pode ser pedido sem o principal")
            return;
        }

        //Calculo dos itens no carrinho
        itensFormatados.map(itf => {
            lstProdutos.map(lp => {
                if (itf.produto == lp.produto) {
                    let valor = itf.quantidade * lp.valor
                    valorTotalDaCompra += valor
                }
            })
        })

        switch (tipoPagamento) {
            case "dinheiro":
                console.log("Pagamento selecionado: Dinheiro. Desconto 5% no valor total.");
                break;
            case "debito":
                console.log("Pagamento selecionado: Débito.");
                break;
            case "credito":
                console.log("Pagamento selecionado: Crédito. Acréscimo de 3% no valor total.");
                break;
            default:
                console.log("Tipo de pagamento inválido.")
                return;
        }

        if (tipoPagamento == "dinheiro") {
            console.log((valorTotalDaCompra - (valorTotalDaCompra * 0.05)).toFixed(2))
        }
        else if (tipoPagamento == "credito") {
            console.log((valorTotalDaCompra + (valorTotalDaCompra * 0.03)).toFixed(2))
        }
        else {
            console.log((`Valor da compra: ${valorTotalDaCompra}.`).toFixed(2))
        }
    }
}

let caixaObj = new CaixaDaLanchonete()

caixaObj.calcularValorDaCompra("dinheiro", ['cafe,1', 'chantily,1'])

export { CaixaDaLanchonete };
