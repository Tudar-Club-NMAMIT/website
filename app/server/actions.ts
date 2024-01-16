"use server"

import { prisma } from "../utils/db"

export async function uploadUser(formData : FormData) {
    await prisma.user.create({
        data : {
            
        }
    })
    return {
        message : "name"
    }
}

