import dummydata from "../dummydata/dummydata"
import { Stack } from "@mui/material";
import NFTListShow from "./NFTListShow";
import { Link } from "react-router-dom";

const NFTList = () => {

    return (
    <Stack direction="row" justifyContent="center" sx={{flexWrap: "wrap"}}>
        {dummydata.map((el) => {
                return (<Stack key={el.id} alignItems="center" textAlign="center"
                sx={{width: 450, border: 1, margin: 3, padding: 2, 
                        borderRadius: 3, boxShadow: "1px 1.5px gray"}}>
                    <Link to={`/${el.id}`} style={{textDecoration: "none", color: "black"}}>
                        <NFTListShow data={el} />
                    </Link>
                </Stack>);
            })}
    </Stack>);
}

export default NFTList;