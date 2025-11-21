export function countStokvelsJoinedLastMonth(memberships: any[]): number {
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  return memberships.filter(m => new Date(m.joinedAt) >= oneMonthAgo).length;
}

export function percentageIncreaseForJoinedStokvels(memberships: any[]): number {
  const now = new Date();
  const oneMonthAgo = new Date(now);
  const twoMonthsAgo = new Date(now);

  oneMonthAgo.setMonth(now.getMonth() - 1);
  twoMonthsAgo.setMonth(now.getMonth() - 2);

  let current = 0;
  let previous = 0;

  memberships.forEach(m => {
    const joined = new Date(m.joinedAt);
    if (isNaN(joined.getTime())) return;

    if (joined >= oneMonthAgo) {
      current++;
    } else if (joined >= twoMonthsAgo && joined < oneMonthAgo) {
      previous++;
    }
  });

  if (previous === 0) {
    if (current === 0) return 0;
    return 100;
  }

  return ((current - previous) / previous) * 100;
}

