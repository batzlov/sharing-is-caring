import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

function PlaceholderImage() {
    return (
        <svg
            className="h-20 w-20 text-gray-200"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="80" height="80" fill="currentColor" />
        </svg>
    );
}

export default async function Page() {
    const data = await fetch("http://localhost:3001/itemCategories");
    const itemCategories = await data.json();

    console.log(itemCategories);

    return (
        <div className="flex flex-1 flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">
                    Kategorien
                </h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Neue Kategorie
                </Button>
            </div>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Kategorien durchsuchen" className="pl-10" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {itemCategories.map((itemCategory: any) => (
                    <Card key={itemCategory.name} className="overflow-hidden">
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                                    <PlaceholderImage />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-semibold leading-none tracking-tight">
                                        {itemCategory.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {itemCategory.description}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
