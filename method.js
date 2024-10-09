var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
function DeductBudget(amt) {
    return function (target, context) {
        // console.log(target, context, amt)
        return function (...args) {
            const instance = this;
            if (instance.budget >= amt) {
                instance.budget = instance.budget - amt;
                target.apply(instance, args);
                console.log(`-${amt}`);
            }
            else {
                console.error(`You don't have enough budget. Required for ${context.name.toString()}: ${amt}, you only have ${instance.budget} :(`);
            }
        };
    };
}
let Budget = (() => {
    let _instanceExtraInitializers = [];
    let _payRent_decorators;
    let _payGroceries_decorators;
    return class Budget {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _payRent_decorators = [DeductBudget(350)];
            _payGroceries_decorators = [DeductBudget(150)];
            __esDecorate(this, null, _payRent_decorators, { kind: "method", name: "payRent", static: false, private: false, access: { has: obj => "payRent" in obj, get: obj => obj.payRent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _payGroceries_decorators, { kind: "method", name: "payGroceries", static: false, private: false, access: { has: obj => "payGroceries" in obj, get: obj => obj.payGroceries }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        budget = (__runInitializers(this, _instanceExtraInitializers), 800);
        payRent() {
            console.log('Paying my rent...');
        }
        payGroceries() {
            console.log('Buying groceries...');
        }
    };
})();
const newBudget = new Budget();
newBudget.payRent(); // budget: 450
newBudget.payGroceries(); // budget: 300
newBudget.payGroceries(); // budget: 150
console.log(`Budget: ${newBudget.budget}`); // 150
newBudget.payRent(); // budget: -200
console.log(`Budget: ${newBudget.budget}`); // 150
let Company = (() => {
    let _instanceExtraInitializers = [];
    let _createMockup_decorators;
    let _createLogo_decorators;
    let _buildWebsite_decorators;
    return class Company {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _createMockup_decorators = [DeductBudget(1000)];
            _createLogo_decorators = [DeductBudget(250)];
            _buildWebsite_decorators = [DeductBudget(800)];
            __esDecorate(this, null, _createMockup_decorators, { kind: "method", name: "createMockup", static: false, private: false, access: { has: obj => "createMockup" in obj, get: obj => obj.createMockup }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _createLogo_decorators, { kind: "method", name: "createLogo", static: false, private: false, access: { has: obj => "createLogo" in obj, get: obj => obj.createLogo }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _buildWebsite_decorators, { kind: "method", name: "buildWebsite", static: false, private: false, access: { has: obj => "buildWebsite" in obj, get: obj => obj.buildWebsite }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        budget = (__runInitializers(this, _instanceExtraInitializers), 5000);
        createMockup() {
            console.log("Hiring designer for mockup...");
        }
        createLogo() {
            console.log("Hiring artist to make logo...");
        }
        buildWebsite() {
            console.log("Hiring dev for development...");
        }
    };
})();
const newCompany = new Company();
console.log(`Initial budget: ${newCompany.budget}`);
newCompany.createLogo(); // 4750
newCompany.createMockup(); // 3750
newCompany.createMockup(); // 2750
newCompany.buildWebsite(); // 1950 - for one dev
newCompany.buildWebsite(); // 1150 - for second dev
newCompany.buildWebsite(); // 350 - for third dev
newCompany.buildWebsite(); // -450 - for fourth dev (will not be hired)
console.log(`Remaining budget: ${newCompany.budget}`);
