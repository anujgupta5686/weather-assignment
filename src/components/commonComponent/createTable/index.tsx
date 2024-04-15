import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  // getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loadingpage from "../Loadingpage";

export type CityData = {
  coordinates: { lat: any; lon: any; };
  geoname_id: any;
  city: string;
  country: string;
  timezone: string;
};

export const columns: ColumnDef<CityData>[] = [
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-2">
          City Name
          <Button variant={"link"} size={"sm"} className="flex items-center justify-center">
            <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} size={"17"} className="text-white" />
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-2">
          Country
          <Button variant={"link"} size={"sm"} className="flex items-center justify-center">
            <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} size={"17"} className="text-white" />
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: "timezone",
    header: ({ column }) => {
      return (
        <div className="flex items-center gap-2">
          Timezone
          <Button variant={"link"} size={"sm"} className="flex items-center justify-center">
            <ArrowUpDown onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} size={"17"} className="text-white" />
          </Button>
        </div>
      )
    },
  },
];

export function CreateTable() {
  const navigate = useNavigate();
  const [data, setData] = React.useState<CityData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
    )
      .then((response) => response.json())
      .then((responseData) => {
        // const apiData = responseData.results;
        console.log('responseData', responseData)
        const formattedData = responseData?.results?.map((record: any) => ({
          city: record?.name,
          country: record?.cou_name_en,
          timezone: record?.timezone,
          geoname_id: record.geoname_id,
          ...record
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {loading && <Loadingpage />}
      <div className="flex items-center py-4">
        <Input
          placeholder="Search city..."
          value={(table.getColumn("city")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("city")?.setFilterValue(event.target.value)
          }
          className="max-w-lg"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter <Filter className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white text-lg font-bold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="cursor-pointer text-slate-900"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {
                    const { lat, lon } = row?.original?.coordinates
                    navigate(`/detailpage/?lat=${lat}&lon=${lon}`);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[31.5rem] text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* This is pegination section if need add pagination uncomment it and above 
      code pagination onChange uncomment then It will execute */}

      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  );
}
