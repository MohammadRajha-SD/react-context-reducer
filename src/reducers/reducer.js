// import { v4 as uuidv4 } from "uuid";

const reducer = (current, action) => {
    switch (action.type) {
        case "add": {
            const n1 = action.payload.n1;
            const n2 = action.payload.n2;
            return Number(n1) + Number(n2)
        }

        case "div": {
            const n1 = action.payload.n1;
            const n2 = action.payload.n2;
            return n1 / n2
        }
        case "mul": {
            const n1 = action.payload.n1;
            const n2 = action.payload.n2;
            return n1 * n2
        }
        case "sub": {
            const n1 = action.payload.n1;
            const n2 = action.payload.n2;
            return n1 - n2
        }
        default: {
            return []
        }
    }
}

export default reducer