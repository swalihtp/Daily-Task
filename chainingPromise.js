async function myFunction(number) {
    return new Promise((resolve) => {
        console.log(number);
        resolve(number);
    });
}

async function square(number) {
    return new Promise((resolve) => {
        const sq = number * number;
        console.log(sq);
        resolve(sq);
    });
}

async function add(number) {
    return new Promise((resolve) => {
        const res = number + 5;
        console.log(res);
        resolve(res);
    });
}

async function final() {
    try {
        const num = await myFunction(5);
        const sq = await square(num);
        const res = await add(sq);
        console.log("Final result:", res);
    } catch (error) {
        console.error(error);
    }
}

final();
