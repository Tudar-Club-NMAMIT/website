"use server"

import { prisma } from "../utils/db"

export async function uploadUser(name : string) {
    await prisma.user.create({
        data : {
            name
        }
    })
    return {
        message : name
    }
}