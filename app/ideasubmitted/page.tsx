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
  idea_name: string;
  slogan: string;
  uni: string;
}

const typedProjectData = projectData as ProjectGroup[];
// avoid the duplicate entries by flattening the data structure and red,  ideaname,
const filteredProjectData = typedProjectData
  .filter(group => group.entries?.length > 0) // First filter out empty groups
  .map(group => {
    // Get only the first entry for each unique rid + idea_name combination
    const uniqueEntries = Array.from(
      new Map(
        group.entries
          .filter(entry => entry.rid && entry.idea_name) // Ensure required fields exist
          .map(entry => [`${entry.rid}-${entry.idea_name}`, entry])
      ).values()
    );
    return {
      ...group,
      entries: uniqueEntries
    };
  });
const allEntries: ProjectEntry[] = filteredProjectData.flatMap((group) =>
  group.entries.map((entry) => ({
    rid: entry.rid,
    idea_name: entry.idea_name,
    slogan: entry.slogan,
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
                  <TableHead>Idea Name</TableHead>
                  <TableHead>Slogan</TableHead>
                  <TableHead>University</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPageData.map((entry, idx) => (
                  <TableRow key={idx} className="hover:bg-gray-50">
                    <TableCell>{(page - 1) * pageSize + idx + 1}</TableCell>
                    <TableCell>{entry.rid}</TableCell>
                    <TableCell className="whitespace-pre-wrap">{entry.idea_name}</TableCell>
                    <TableCell className="whitespace-pre-wrap">{entry.slogan}</TableCell>
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