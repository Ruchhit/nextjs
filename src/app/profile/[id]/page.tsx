export default function userProfile({params} : any){
    return(
        <div>
            <h1>user profile page</h1>
            <p>{params.id}</p>
        </div>
    )
}