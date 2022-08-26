import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

export default function Orders() {
  const posts = useSelector((state) => state.posts.posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <>
          <Title>Recent Products</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post._id}>
                    <TableCell>{post.name}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.type}</TableCell>
                  <TableCell>{post.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
  );
}
