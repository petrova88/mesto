(()=>{"use strict";var t=document.querySelector(".edit-button"),e=document.forms["edit-form"],n=document.forms["add-form"],o=document.querySelector(".add-button"),r={formSelector:".popup__input-container",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_invalid",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error"};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,l(o.key),o)}}function a(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var c=function(){function t(e,n,o){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_setEventListener",(function(){r._photoLikeBtn.addEventListener("click",r._handleLike.bind(r)),r._photoDeleteBtn.addEventListener("click",r._handleDelete.bind(r)),r._photoImage.addEventListener("click",r._openPhoto.bind(r))})),a(this,"createCard",(function(){return r._photoImage=r._cardElement.querySelector(".photo__image"),r._photoText=r._cardElement.querySelector(".photo__text"),r._photoDeleteBtn=r._cardElement.querySelector(".photo__trash"),r._photoLikeBtn=r._cardElement.querySelector(".photo__like"),r._photoImage.src=r._photoData.link,r._photoImage.alt=r._photoData.title,r._photoText.textContent=r._photoData.title,r._setEventListener(),r._cardElement})),this._photoData=e,this._link=e.link,this._title=e.title,this._seeBigPhoto=o,this._cardElement=document.querySelector(n).content.querySelector(".photo").cloneNode(!0)}var e,n;return e=t,(n=[{key:"_handleLike",value:function(){this._photoLikeBtn.classList.toggle("photo__like_active")}},{key:"_handleDelete",value:function(){this._cardElement.remove()}},{key:"_openPhoto",value:function(){this._seeBigPhoto(this._photoData)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,y(o.key),o)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var b=function(){function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_hasInvalidInput",(function(){return o._inputList.some((function(t){return!t.validity.valid}))})),p(this,"_changeButtonState",(function(){o._hasInvalidInput()?o._deactivateButton():o._activateButton()})),p(this,"_checkInputValidity",(function(t){t.validity.valid?o._hideInputError(t):o._showInputError(t)})),p(this,"_setValidationEventListeners",(function(){o._changeButtonState(),o._inputList.forEach((function(t){t.addEventListener("input",(function(){o._checkInputValidity(t),o._changeButtonState()}))}))})),p(this,"enableValidation",(function(){o._formList=Array.from(document.querySelectorAll(o._formSelector)),o._formList.forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),o._setValidationEventListeners()}))})),p(this,"resetValidationState",(function(){o._inputList.forEach((function(t){o._hideInputError(t)})),o._changeButtonState()})),this._form=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){this._errorElement=this._form.querySelector(".".concat(t.id,"-error")),t.classList.add(this._inputErrorClass),this._errorElement.textContent=t.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){this._errorElement=this._form.querySelector(".".concat(t.id,"-error")),t.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=t.validationMessage,this._errorElement.textContent=""}},{key:"_deactivateButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_activateButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,d(o.key),o)}}function v(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var _=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),v(this,"_handleClickByOverlay",(function(t){n._overlay=t.target.classList.contains("popup"),n._closeButton=t.target.classList.contains("popup__close-btn"),(n._overlay||n._closeButton)&&n.close()})),this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("click",this._handleClickByOverlay),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){document.addEventListener("click",this._handleClickByOverlay),document.addEventListener("keydown",this._handleEscClose)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},E.apply(this,arguments)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function k(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(i,t);var e,n,o,r=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return g(t)}(this,t)});function i(t){var e,n,o,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o=g(n=r.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.title,n._imagePopupCaption.textContent=t.title,E((e=g(n),j(i.prototype)),"open",e).call(e)},(u=k(u="open"))in o?Object.defineProperty(o,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[u]=a,n._popupImage=n._popup.querySelector(".popup-image__image"),n._imagePopupCaption=n._popup.querySelector(".popup-image__text"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(_);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==O(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===O(r)?r:String(r)),o)}var r}var L=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._initialCards=o,this.renderer=r}var e,n;return e=t,(n=[{key:"addCardFromArray",value:function(){var t=this;this._initialCards.forEach((function(e){t.addItem(t.renderer(e))}))}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==B(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===B(r)?r:String(r)),o)}var r}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileJob=document.querySelector(e.profileJobSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileJob.textContent=t.job}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==D(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===D(r)?r:String(r)),o)}var r}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},V.apply(this,arguments)}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(o);if(r){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFunction=e,n._form=n._popup.querySelector(".popup__input-container"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"getInputValues",value:function(){var t=this;return this._value={},this._inputList.forEach((function(e){t._value[e.name]=e.value})),this._value}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){V(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitFunction)}},{key:"close",value:function(){V(T(u.prototype),"close",this).call(this),this._form.reset()}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_),R=new I({profileNameSelector:".profile__title",profileJobSelector:".profile__subtitle"}),A=new P(".popup-image"),G=new L({items:[{title:"Красная площадь",link:"https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{title:"Санкт-Петербург",link:"https://images.unsplash.com/photo-1660224319946-d83b01a57321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"},{title:"Байкал",link:"https://images.unsplash.com/photo-1552857406-14af62dbf053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},{title:"Москва сити",link:"https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{title:"Судак",link:"https://images.unsplash.com/photo-1565342403875-07a8dc5ed13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},{title:"Сочи",link:"https://images.unsplash.com/photo-1561885121-45d5a4b8b82b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}],renderer:function(t){return new c(t,".photo-template",A.open).createCard()}},".photos");G.addCardFromArray();var N=new H(".popup_edit",(function(t){t.preventDefault(),R.setUserInfo(N.getInputValues()),N.close()})),W=new H(".popup_mesto",(function(t){t.preventDefault(),G.addItem(G.renderer(W.getInputValues())),W.close()})),Y=new b(r,e);Y.enableValidation();var J=new b(r,n);J.enableValidation(),A.setEventListeners(),N.setEventListeners(),W.setEventListeners(),t.addEventListener("click",(function(){Y.resetValidationState(),N.setInputValues(R.getUserInfo()),N.open()})),o.addEventListener("click",(function(){J.resetValidationState(),W.open()}))})();