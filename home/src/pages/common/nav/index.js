require('./index.css')
var api = require('api')
var _util = require('util')
var page = {
    init:function(){
        this.loadUsername()
        this.loadCartsCount()
        this.bindEvent()
        return this
    },
    bindEvent:function(){
        $('#logout').on('click',function(){
            api.logout({
                success:function(){
                    window.location.reload()
                },
                error:function(msg){
                    _util.showErrorMsg(msg)
                }
            })
        })
    },
    loadUsername:function(){
        api.getUsername({
            success:function(data){
                $('.not-login').hide()
                $('.login').show()
                .find('.username')
                .text(data.username)
            }
        })
    },
    loadCartsCount:function(){
        var $cartNum = $('.nav-list .cart-num')
        api.getCartsCount({
            success:function(count){
                $cartNum.text(count || 0)
            },
            error:function(){
                $cartNum.text(0)
            }
        })
    }
}

module.exports = page.init()