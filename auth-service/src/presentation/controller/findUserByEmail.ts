import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const findUserByEmailController = ( dependancies: IDependancies ) => {
    const { useCases: {findUserByEmailUseCase} } = dependancies
    return  async ( req: Request, res: Response, next: NextFunction ) => {
        try {
            const { email } = req.params

            const result = await findUserByEmailUseCase(dependancies).execute(email)

            if (result) {
                throw new Error("Account already exist with this email");
                
            }

            res.status(200).json({success: true, data: {}, message: "Emal is unique!"})

        } catch (error: any) {
            
        }
    }
}