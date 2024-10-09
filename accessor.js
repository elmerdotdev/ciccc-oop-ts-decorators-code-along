var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
function LogChange(accessor, context) {
    console.log(accessor);
    console.log(context);
    return {
        get() {
            console.log(`Getting the current value of ${context.name.toString()}...`);
            return accessor.get.call(this);
        },
        set(value) {
            console.log(`Setting the value of ${context.name.toString()} to ${value}...`);
            return accessor.set.call(this, value);
        }
    };
}
let Admin = (() => {
    let _instanceExtraInitializers = [];
    let _permissions_decorators;
    let _permissions_initializers = [];
    return class Admin {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _permissions_decorators = [LogChange];
            __esDecorate(this, null, _permissions_decorators, { kind: "accessor", name: "permissions", static: false, private: false, access: { has: obj => "permissions" in obj, get: obj => obj.permissions, set: (obj, value) => { obj.permissions = value; } }, metadata: _metadata }, _permissions_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #permissions_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _permissions_initializers, 'Read Only'));
        get permissions() { return this.#permissions_accessor_storage; }
        set permissions(value) { this.#permissions_accessor_storage = value; }
    };
})();
const admin = new Admin();
admin.permissions = "Full Access";
console.log(admin.permissions);
let Security = (() => {
    let _instanceExtraInitializers = [];
    let _accessLevel_decorators;
    let _accessLevel_initializers = [];
    return class Security {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _accessLevel_decorators = [LogChange];
            __esDecorate(this, null, _accessLevel_decorators, { kind: "accessor", name: "accessLevel", static: false, private: false, access: { has: obj => "accessLevel" in obj, get: obj => obj.accessLevel, set: (obj, value) => { obj.accessLevel = value; } }, metadata: _metadata }, _accessLevel_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #accessLevel_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _accessLevel_initializers, "Unauthorized"));
        get accessLevel() { return this.#accessLevel_accessor_storage; }
        set accessLevel(value) { this.#accessLevel_accessor_storage = value; }
    };
})();
const security = new Security();
security.accessLevel = "Employees Only";
console.log(security.accessLevel);
function transformCase(accessor, context) {
    console.log(accessor);
    console.log(context);
    return {
        get() {
            const val = accessor.get.call(this);
            const upperCased = val.toUpperCase();
            console.log(`Converting ${val} to ${upperCased}...`);
            return upperCased;
        },
        set(value) {
            const lowerCased = value.toLowerCase();
            console.log(`Updating product ${value} to ${lowerCased}...`);
            return accessor.set.call(this, lowerCased);
        }
    };
}
let Product = (() => {
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    return class Product {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [transformCase];
            __esDecorate(this, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #name_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, "Default"));
        get name() { return this.#name_accessor_storage; }
        set name(value) { this.#name_accessor_storage = value; }
    };
})();
const product = new Product();
console.log(product.name); // DEFAULT
product.name = "aPplE";
console.log(product.name); // APPLE
