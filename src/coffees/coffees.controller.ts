import { Body, Controller, Get, Param, Patch, Post, Delete, Query} from '@nestjs/common';
import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesServices: CoffeesService){}

    @Get()
    findAll(@Query() paginationQuery){
        // const { limit, offset } = paginationQuery;
        return this.coffeesServices.findAll();
        // return `This action retuns all coffees. Limit ${limit}, Offset ${offset}`
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coffeesServices.findOne(id);
        // return `This action retuns #${id} coffee`
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesServices.create(createCoffeeDto);
        // return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesServices.update(id, updateCoffeeDto);
        // return `This action updates #${id} coffee`
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.coffeesServices.remove(id);
        // return `This action removes #${id} coffee`
    }

}
