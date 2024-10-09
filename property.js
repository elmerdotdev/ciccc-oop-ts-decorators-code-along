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
function AddAssignment(target, context) {
    console.log(target);
    console.log(context);
    return function (args) {
        args.push({
            name: 'Figma 101',
            difficulty: 'easy',
            submitted: true
        });
        return args;
    };
}
let Course = (() => {
    let _instanceExtraInitializers = [];
    let _assignments_decorators;
    let _assignments_initializers = [];
    return class Course {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _assignments_decorators = [AddAssignment];
            __esDecorate(null, null, _assignments_decorators, { kind: "field", name: "assignments", static: false, private: false, access: { has: obj => "assignments" in obj, get: obj => obj.assignments, set: (obj, value) => { obj.assignments = value; } }, metadata: _metadata }, _assignments_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        assignments = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _assignments_initializers, []));
    };
})();
const course = new Course();
console.log(course);
// User Profile
function defaultValue(value) {
    return function (initialValue, context) {
        console.log(initialValue);
        console.log(typeof value);
        console.log(context.name);
        if (context.name === "dateJoined") {
            const message = value >= 2024 ? 'You are a new user' : 'You are a old user';
            console.log(message);
        }
        return () => value;
    };
}
let UserProfile = (() => {
    let _instanceExtraInitializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _dateJoined_decorators;
    let _dateJoined_initializers = [];
    let _age_decorators;
    let _age_initializers = [];
    return class UserProfile {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _username_decorators = [defaultValue('Anonymous')];
            _dateJoined_decorators = [defaultValue(2000)];
            _age_decorators = [defaultValue(0)];
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } }, metadata: _metadata }, _username_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _dateJoined_decorators, { kind: "field", name: "dateJoined", static: false, private: false, access: { has: obj => "dateJoined" in obj, get: obj => obj.dateJoined, set: (obj, value) => { obj.dateJoined = value; } }, metadata: _metadata }, _dateJoined_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        username = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _username_initializers, void 0));
        dateJoined = __runInitializers(this, _dateJoined_initializers, void 0);
        age = __runInitializers(this, _age_initializers, void 0);
    };
})();
const user = new UserProfile();
console.log(user.username);
function AddTask(target, context) {
    return function (args) {
        args.push({
            name: 'Wash laundry',
            completed: true
        });
        return args;
    };
}
let TaskManager = (() => {
    let _instanceExtraInitializers = [];
    let _tasks_decorators;
    let _tasks_initializers = [];
    return class TaskManager {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _tasks_decorators = [AddTask];
            __esDecorate(null, null, _tasks_decorators, { kind: "field", name: "tasks", static: false, private: false, access: { has: obj => "tasks" in obj, get: obj => obj.tasks, set: (obj, value) => { obj.tasks = value; } }, metadata: _metadata }, _tasks_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        tasks = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _tasks_initializers, []));
    };
})();
const task = new TaskManager();
console.log(task);
