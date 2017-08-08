'use strict'

class Exception extends Error {
    /**
     * Configura infomações padrões de Erro e setas as variáveis
     * customizadas depois congela as informações para que o objeto
     * não seja mais alterado depois de criado
     * @param {String} message
     * @param {String} caption
     */
    constructor (
        message = 'Ocorreu um erro!',
        caption = 'Erro'
    ) {
        super(message)
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name

        this.severity = {
            INFO: 'info',
            WARN: 'warning',
            FATAL: 'error',
            CONNECTION: 'error_conection'
        }
        this.caption = caption
        Object.freeze(this)
    }
}

/**
 * Cria a classe de Cache Erro
 * @param {String} message
 * @param {String} caption
 */
class CacheException extends Exception {

    constructor (
        message = 'Ocorreu um Erro em Cache',
        caption = 'Cache Erro'
    ) {
        super(message, caption)
    }
}

/**
 * Cria a classe de Cache Resource
 * @param {String} message
 * @param {String} caption
 */
class ResourceException extends Exception {

    constructor (
        message = 'Ocorreu um Erro em Resource',
        caption = 'Resource Erro',
        status = 500
    ) {
        super(message, caption)
        this.status = status
    }
}

/**
 * Cria a classe de Cache Auth
 * @param {String} message
 * @param {String} caption
 */
class AuthException extends Exception {

    constructor (
        message = 'Ocorreu um Erro em Auth',
        caption = 'Auth Erro'
    ) {
        super(message, caption)
    }
}

export {
    CacheException,
    ResourceException,
    AuthException
}
