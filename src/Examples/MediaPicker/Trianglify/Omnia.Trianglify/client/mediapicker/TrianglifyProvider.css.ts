import { types,style } from 'typestyle';



export const TrianglifyProviderStyles = {
    wrapper : style({
        display:"inline-flex"
    }),
    settings: style({
        flexBasis:"300px",
        flexShrink:0,
        height:"calc(100vh - 190px)",
        overflowY:"auto",
        overflowX:"hidden"
    }),
    canvas : style({
        minWidth:"300px"
    }),
    colorTile : style({
      width:"30px",
      height:"25px",
    }),
    colorBrewer : style({
        display:"flex",
        marginLeft:"5px",
        width:"270px",
        $nest:{
            "&:hover" :{
                cursor:"pointer",
                transform: "scale(1.01)"
            }
        }
      }),
    trianglify : style({
        padding: 40,
        $nest: { "& > canvas" : {
            maxWidth: "100%",
            maxHeight: "100%"
            },
            "&:hover" :{
                cursor:"pointer",
            }
        }
    })  
}

