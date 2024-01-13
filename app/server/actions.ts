"use server"

import { prisma } from "../utils/db"

export async function uploadName(name : string) {
    await prisma.test.create({
        data : {
            name
        }
    })
    return {
        message : name
    }
}