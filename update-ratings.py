#!/usr/bin/env python3
"""
Update resource ratings JSON file with new votes
Run this script to aggregate pending votes into the global ratings file
"""

import json
import os
from datetime import datetime

def update_ratings():
    """Update the global ratings JSON file"""

    # Path to the ratings file
    ratings_file = 'data/resource-ratings.json'

    if not os.path.exists(ratings_file):
        print("❌ Error: resource-ratings.json not found!")
        return

    # Load current ratings
    with open(ratings_file, 'r') as f:
        ratings = json.load(f)

    print("Current Ratings:")
    print("="*60)

    # Display current counts (excluding metadata)
    for resource_id, count in sorted(ratings.items()):
        if resource_id != 'last_updated':
            print(f"  {resource_id}: {count}")

    print("\n" + "="*60)

    # Prompt for updates
    print("\nEnter vote counts to add (or press Enter to skip):")
    print("Format: resource-id count")
    print("Example: vf8-manual 5")
    print("Type 'done' when finished\n")

    updates = {}
    while True:
        user_input = input("➤ ").strip()

        if user_input.lower() == 'done' or user_input == '':
            break

        parts = user_input.split()
        if len(parts) != 2:
            print("  ⚠️  Invalid format. Use: resource-id count")
            continue

        resource_id, count_str = parts

        try:
            count = int(count_str)
            if count < 0:
                print("  ⚠️  Count must be positive")
                continue

            if resource_id not in ratings:
                print(f"  ⚠️  Unknown resource: {resource_id}")
                print(f"  Available: {', '.join([k for k in ratings.keys() if k != 'last_updated'])}")
                continue

            updates[resource_id] = count
            print(f"  ✓ Will add {count} votes to {resource_id}")

        except ValueError:
            print("  ⚠️  Count must be a number")

    if not updates:
        print("\n❌ No updates made.")
        return

    # Apply updates
    print("\nApplying updates...")
    for resource_id, count in updates.items():
        old_count = ratings[resource_id]
        ratings[resource_id] = old_count + count
        print(f"  {resource_id}: {old_count} → {ratings[resource_id]} (+{count})")

    # Update timestamp
    ratings['last_updated'] = datetime.now().isoformat() + 'Z'

    # Save updated ratings
    with open(ratings_file, 'w') as f:
        json.dump(ratings, f, indent=2)

    print("\n✅ Ratings updated successfully!")
    print(f"📝 Updated: {ratings_file}")
    print(f"🕐 Timestamp: {ratings['last_updated']}")
    print("\nDon't forget to commit and push the changes!")


def show_stats():
    """Show current rating statistics"""
    ratings_file = 'data/resource-ratings.json'

    if not os.path.exists(ratings_file):
        print("❌ Error: resource-ratings.json not found!")
        return

    with open(ratings_file, 'r') as f:
        ratings = json.load(f)

    print("\n📊 Current Rating Statistics")
    print("="*60)

    # Calculate stats
    resource_ratings = {k: v for k, v in ratings.items() if k != 'last_updated'}
    total_votes = sum(resource_ratings.values())

    # Sort by count
    sorted_ratings = sorted(resource_ratings.items(), key=lambda x: x[1], reverse=True)

    for resource_id, count in sorted_ratings:
        bar = '█' * min(count, 50)  # Visual bar
        print(f"  {resource_id:25} {count:3} {bar}")

    print("="*60)
    print(f"Total Votes: {total_votes}")
    print(f"Last Updated: {ratings.get('last_updated', 'Unknown')}")
    print()


if __name__ == '__main__':
    import sys

    print("="*60)
    print("VinFast Owners - Resource Ratings Manager")
    print("="*60)
    print()

    if len(sys.argv) > 1 and sys.argv[1] == 'stats':
        show_stats()
    else:
        show_stats()
        print()
        update_ratings()
