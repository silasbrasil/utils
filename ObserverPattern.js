'use strict'

/**
 * Esse módulo implementa um Padrão de Projeto (Desing Pattern) chamado de
 * observer. O Primeiro Caso a dependência é de Um-Para-Um, no Segundo Caso
 * é de Um-Para-Muitos.
 */

/** PRIMEIRO CASO @name Observer1to1 */

class Service {

    constructor () { }

    subscribe (action) {
        this.action = action
    }

    load () {
        this.publish('### Carregou a HOME ###')
    }

    publish (data) {
        this.action(data)
    }
}

const service = new Service()
service.subscribe(home => console.log(home))
service.load()
