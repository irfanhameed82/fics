"use client";
import React, { useState, useMemo } from "react";
import projectData from "../data/projectData.json"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
interface ProjectGroup {
  entries: ProjectEntry[];
}

interface ProjectEntry {
  rid: string;
  abstract: string;
  uni: string;
}

const typedProjectData = projectData as ProjectGroup[];

const allEntries: ProjectEntry[] = typedProjectData.flatMap((group) =>
  group.entries.map((entry) => ({
    rid: entry.rid,
    abstract: entry.abstract,
    uni: entry.uni,
  }))
);

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

const ProjectsTablePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter entries by search (checks rid or uni)
  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return allEntries.filter(
      (e) =>
        e.rid.includes(term) ||
        e.uni.toLowerCase().includes(term)
    );
  }, [search]);

  const pageCount = Math.ceil(filtered.length / pageSize);

  const currentPageData = useMemo(
    () => filtered.slice((page - 1) * pageSize, page * pageSize),
    [filtered, page, pageSize]
  );

  return (
    <div className="w-full m-4 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters & Page Size */}
          <div className="flex items-center justify-between mb-4">
            <Input
              placeholder="Filter by Project ID or University"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="max-w-sm"
            />
            <div className="flex items-center space-x-2">
              <span>Show:</span>
              <select
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
                className="border rounded p-1"
              >
                {PAGE_SIZE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span>entries</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>S.No</TableHead>
                  <TableHead>Project ID</TableHead>
                  <TableHead>Abstract</TableHead>
                  <TableHead>University</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPageData.map((entry, idx) => (
                  <TableRow key={idx} className="hover:bg-gray-50">
                    <TableCell>{(page - 1) * pageSize + idx + 1}</TableCell>
                    <TableCell>{entry.rid}</TableCell>
                    <TableCell className="whitespace-pre-wrap">{entry.abstract}</TableCell>
                    <TableCell>{entry.uni}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-4">
            <span>
              Page {page} of {pageCount}
            </span>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page === pageCount}
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsTablePage;