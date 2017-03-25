import { Injectable } from '@angular/core'
import { BaseUrl, RESTClient, DefaultHeaders, Produces, GET, DELETE, POST, PUT, Path, Body} from 'ng2-http'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()    

@DefaultHeaders({
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
})

@BaseUrl('http://192.168.1.5:3000/despensa')

export class DespensaService extends RESTClient{

    constructor(public http: Http){ super(http) }

    @GET('/')
    @Produces<Produto[]>()
    get(): Observable<Produto[]> { return null; }

    @DELETE('/{id}')
    remove( @Path('id') id: number) : Observable<any> { return null; }

    @POST('/')
    @Produces<Produto>()
    add( @Body despensa: Produto) : Observable<Produto> { return null; }

    @PUT('/{id}')
    @Produces<Produto>()
    update( @Path('id') id: number, @Body despensa: Produto) : Observable<Produto> { return null; }
}

export interface Produto{
    //? é quando é opcional
    id?: number
    title: string
    quantidade: number
    foto?: string
}