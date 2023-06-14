import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom"
import styled from "styled-components";



interface OrderType {
    order : React.Dispatch<React.SetStateAction<[]>>
}

interface ObjectType {
    order?:string
}

interface ParamsType extends ObjectType  {
     category: string[],
     color:string[]
}

export const Sidebar = () => {

    // const [searchparams, setSearchparams] = useSearchParams()
    // let initialcategory = searchparams.getAll("category")
    // const [category, setCategory] = useState(initialcategory || [])
    // console.log(searchparams, "insearchparams")

    // useEffect(() => {
    //   let params = {
    //     category,
    //   }

    //   setSearchparams(params)
    // }, [category])


    // const handlechangecategory = (e) => {
    //   const { value } = e.target
    //   let newcategory = [...category]
    //   if (newcategory.includes(value)) {
    //     newcategory = newcategory.filter((el) => el !== value)
    //   } else {
    //     newcategory.push(value)
    //   }

    //   setCategory(newcategory)
    // }

    const [searchparams, setSearchparams] = useSearchParams()
    let initialcategory = searchparams.getAll("category")
    let initialcolor = searchparams.getAll("color")
    const [category, setCategory] = useState(initialcategory || [])
    const [color, setColor] = useState(initialcolor || [])
    const [order, setorder] = useState("")



    useEffect(() => {


        let obj2  = {
            
        } 

        if (order) {
            obj2={
                order
            }
        }

        let params  = {
            category: category,
            color: color,
            ...obj2

        }
        setSearchparams(params)


    }, [category, color, order])
    //  console.log(searchparams,"insearch params");

    const handlechangecategory = (e:React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target

        let newcategory = [...category]
        if (newcategory.includes(value)) {
            newcategory = newcategory.filter((el) => el !== value)
        } else {
            newcategory.push(value)
        }

        setCategory(newcategory)


    }
    // console.log(category," settingn category")

    const handlechangecolor = (e:React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.target

        let newcolor = [...color]
        if (newcolor.includes(value)) {
            newcolor = newcolor.filter((el) => el !== value)
        } else {
            newcolor.push(value)
        }

        setColor(newcolor)
    }

    // console.log(type,"setting type in sidebar")

    const handldeorder = (e :React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.target

        setorder(value)


    }

    // console.log(order, " in order of sidebar")

    return (
        <DIV>
            <h3>Filter by Category</h3>
            <div>
                <input value={"laptop"} onChange={handlechangecategory} type="checkbox" checked={category.includes("laptop")} />
                <label>Laptop</label>
                <br />
                <br />
                <input value={"headphone"} onChange={handlechangecategory} type="checkbox" checked={category.includes("headphone")} />
                <label>Headphone</label>
                <br />
                <br />
                <input value={"phone"} onChange={handlechangecategory}  type="checkbox" checked={category.includes("phone")} />
                <label>Phone</label>
                <br />
             
            </div>
            <br />
            <br />
            <h3> Filter by Color</h3>
            <div>
                <input onChange={handlechangecolor} value={"Black"} type="checkbox" checked={color.includes("Black")} />
                <label>Black</label>
                <br />
                <br />
                <input onChange={handlechangecolor} value={"Grey"} type="checkbox" checked={color.includes("Grey")} />
                <label>Grey</label>
                <br />
                <br />
                <input onChange={handlechangecolor} value={"Blue"} type="checkbox" checked={color.includes("Blue")} />
                <label>Blue</label>
                <br />
                <br />
                <input onChange={handlechangecolor} value={"Midnight"} type="checkbox" checked={color.includes("Midnight")} />
                <label>Midnight</label>
            </div>
            <br />
            <br />
            <br />
            <h3>Sort by Price</h3>
            <div>
                <input onChange={handldeorder} value={"asc"} type="radio" name="sort" />
                <label>Ascending</label>
                <br />
                <br />
                <input onChange={handldeorder} value={"desc"} type="radio" name="sort" />
                <label>Descending</label>
            </div>
        </DIV>
    );
};

const DIV = styled.div`
  width: 180px;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
