# Prompt: Run QC only (v5)

Fastest path to a grade without rebuilding.

---

```bash
pnpm qc --site generated-sites/<slug>
# Batch:
pnpm qc --batch generated-sites/
```

Read `qc-report.html` for the traffic-light grid. Every red row cites the
§7 check that failed and the exact remedy. Fix categories, not instances.
