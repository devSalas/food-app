import * as clientService from '../services/ClientService'
import { Response, Request } from 'express';
import { sendJsonResponse } from '../utils/responseHttp';
import { catchedAsync } from '../utils/catchedAsync';
import { CustomError } from '../utils/errors';
async function getClients(req: Request, res: Response) {
    console.log({m:"hok"})
    const clients = await clientService.getClients();

    sendJsonResponse(res, 400, clients, "all clients")
}

async function getClient(req: Request, res: Response) {
    const id = req.params.id

    if (!(/^\d+$/.test(id))) throw new CustomError("el id tiene que ser un numero", 400)

    const client = await clientService.getClient(+id);

    if(!client) throw new  CustomError("esta cliente no existe",404)

    return sendJsonResponse(res, 200, client,"cliente con exito")
}


async function createClient(req: Request, res: Response) {
    const clientCreated  =await clientService.createClient(req.body);
    return sendJsonResponse(res,201,clientCreated,'created client')
}

async function updateClient(req: Request, res: Response) {
    const id = req.params.id
    if (!(/^\d+$/.test(id))) throw new CustomError("el id tiene que ser un numero", 400)
    const idNumber = parseInt(id)
    const body  =req.body

    const clientUpdated =await clientService.updateClient( idNumber,body)
     return sendJsonResponse(res,200,clientUpdated,"update client")
}
async function deleteClient(req: Request, res: Response) {
    let id = req.params.id
    if (!(/^\d+$/.test(id))) throw new CustomError("el id tiene que ser un numero", 400)
    const idNumber = parseInt(id)

    const clientDeleted = await clientService.deleteClient(idNumber)
    return sendJsonResponse(res,200,clientDeleted,"delete client")
}

export const clientController = {
    getClients: catchedAsync(getClients),
    getClient: catchedAsync(getClient),
    createClient:catchedAsync(createClient),
    updateClient:catchedAsync(updateClient),
    deleteClient:catchedAsync(deleteClient)
}