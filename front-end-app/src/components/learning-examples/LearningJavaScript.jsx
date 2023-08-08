const person = {
    name: 'Deepanshu Panwar',
    address: {
        line1: 'Vipul World',
        city: 'Gurgaon',
        state: 'Haryana',
    },
    profiles: ['Facebook', 'Twitter', 'Instagram'],
    printProfile:() => {
        person.profiles.map(
            profiles => console.log(profiles)
        )
    }

}



export default function JavaScript (){

    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.printProfile()}</div>
        </>
    );
}