import { getCollection, type CollectionKey } from "astro:content";

/** Every collection entry has an `order` field; this sorts by it. */
export async function getSortedCollection<C extends CollectionKey>(name: C) {
  const entries = await getCollection(name);
  return entries.sort(
    (a, b) =>
      (a.data as { order: number }).order - (b.data as { order: number }).order,
  );
}
