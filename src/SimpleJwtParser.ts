function parseJwt(jwt:string) {
    const jwtSections = jwt.split(".");
    if(jwtSections.length !== 3)
        throw new Error("Invalid JWT.");
    try{
        return jwtSections.map((x,idx)=>{
            if(idx === 2) return x;
            try{
                return JSON.stringify(JSON.parse(atob(x.replace(/-/g, '+').replace(/_/g, '/'))), null, "\t");
            } catch {
                return atob(x.replace(/-/g, '+').replace(/_/g, '/'));
            }
        });
    } catch(e) {
        console.log(e);
        throw new Error("Invalid JWT.");
    }
}

export default parseJwt;