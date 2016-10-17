import { Suite } from "benchmark";

type PersonTuple = [string, string, number, boolean];
interface PersonInterface {
    firstName: string;
    secondName: string;
    age: number;
    eatsMeat: boolean;
};

let getPerson_tuple: () => PersonTuple = () => {
    return [ "Morgan", "Freeman", 79, true ];
};

let getPerson_interface: () => PersonInterface = () => {
    return {
        firstName: "Morgan",
        secondName: "Freeman",
        age: 79,
        eatsMeat: true
    };
};

new Suite()
    .add("tuple", () => {
        let person = getPerson_tuple();
        let fullName = person[0] + " " + person[1];
    })
    .add("interface", () => {
        let person = getPerson_interface();
        let fullName = person.firstName + " " + person.secondName;
    })
    .on("cycle", (event) => {
        console.log(String(event.target));
    })
    .on("complete", function() {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run({ async: true });
