import { Companies } from "../components/Companies";
import { Hero } from "../components/Hero";

export function Home(){
    return(
        <main className="h-vh">
            <Hero/>
            <Companies/>
        </main>
    )
    

}